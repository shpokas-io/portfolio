import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function Portfolio() {
  return (
    <section id="portfolio" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <Skeleton className="h-8 w-48 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="flex flex-col justify-between">
            <CardHeader>
              <Skeleton className="w-full h-48 rounded-lg" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-6 w-3/4 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <div className="flex gap-2 mt-4">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-18 rounded-full" />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm">
                <Skeleton className="h-4 w-16" />
              </Button>
              <Button size="sm">
                <Skeleton className="h-4 w-20" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}