import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { defaultValues, formSchema, type FormData } from "@/types/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider, SliderThumb } from "@/components/ui/slider"
import { RecipeFormLabel } from "@/components/form/label-form-field"
import {
  RadioGroupFormField,
  options,
} from "@/components/form/radio-group-form-field"
import { SelectFormField } from "@/components/form/select-form-field"
import { TextAreaField } from "@/components/form/text-area-field"

interface RecipeFormProps {
  onSubmit: (values: FormData, e: React.FormEvent) => void
  isLoading: boolean
}

export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 md:px-4"
      >
        {/* <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <RecipeFormLabel
                stepIndex="1"
                labelIndex="?"
              />
              <FormControl>
                <Input placeholder="Add some ingredients" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="cooking_time"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <RecipeFormLabel
                stepIndex="2"
                labelIndex="How many days?"
              />
              <FormControl>
                <Slider
                  id="days"
                  aria-label="Choose cooking time"
                  defaultValue={[5]}
                  max={120}
                  step={10}
                  min={3}
                  onValueChange={field.onChange}
                  {...field}
                >
                  <SliderThumb aria-label="Cooking time"></SliderThumb>
                </Slider>
              </FormControl>
              <FormDescription className="flex flex-row-reverse">
                🕛 {field.value} days
              </FormDescription>
            </FormItem>
          )}
        />
        <FormItem>
          <RecipeFormLabel stepIndex="3" labelIndex="How many people?" />
          <RadioGroupFormField form={form} name="people" options={options} />
        </FormItem>
        <FormItem>
          <RecipeFormLabel stepIndex="4" labelIndex="In which continent?" />
          <SelectFormField form={form} name="continent" />
        </FormItem>
        <FormItem>
          <RecipeFormLabel stepIndex="4" labelIndex="Tell us more" />
          <TextAreaField form={form} name="more" />
        </FormItem>
        {isLoading ? (
          <Button disabled size="lg" className="w-full font-semibold">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold"
          >
            Generate
          </Button>
        )}
      </form>
    </Form>
  )
}
