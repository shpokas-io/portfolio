import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden md:flex space-x-6">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-18" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <nav className="flex items-center">
            <Button variant="outline" size="sm">
              <Skeleton className="h-4 w-16" />
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  )
}