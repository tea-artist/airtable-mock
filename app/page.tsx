import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Mock data for Airtable
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Access token</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="API access token for airtable" />
          </form>
        </CardContent>
        <CardHeader>
          <CardTitle>Table name</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Which table do you want to import data into" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
