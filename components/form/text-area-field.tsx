"use client"

import { FieldValues } from "react-hook-form"

import { FormControl, FormField, FormItem } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

interface TextAreaFieldProps {
  form: FieldValues
  name: string
}

export function TextAreaField({ form, name }: TextAreaFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger aria-label="more">
                <SelectValue placeholder="Tell us more about your trip..." />
              </SelectTrigger>
            </FormControl>
            <Textarea />
          </Select>
        </FormItem>
      )}
    />
  )
}
