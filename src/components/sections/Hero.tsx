import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-12 w-60" />
        </main>

        <div className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-4/5" />
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
          <Button className="w-full md:w-1/3">
            <Skeleton className="h-4 w-20" />
          </Button>

          <Button variant="outline" className="w-full md:w-1/3">
            <Skeleton className="h-4 w-24" />
          </Button>
        </div>
      </div>

      <div className="z-10">
        <Skeleton className="w-80 h-80 rounded-full" />
      </div>
    </section>
  )
}