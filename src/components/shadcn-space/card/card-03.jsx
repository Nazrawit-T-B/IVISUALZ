import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "@/components/ui/field"

import { Textarea } from "@/components/ui/textarea"

const ProductCard = () => {
    return (
        <Card className=" bg-gray-900 w-120">
            <CardHeader>
            </CardHeader>
            <CardContent className="text-center">
            <form className="w-full max-w-sm text-white">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel"  />
          </Field>
        </div>
        <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" className="text-black">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
            </CardContent>
        </Card>
    );
};

export default ProductCard