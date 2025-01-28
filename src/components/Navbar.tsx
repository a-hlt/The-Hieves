/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { EyeClosedIcon, MapIcon, UserIcon, UserPlusIcon } from "lucide-react"

export default function Navbar() {
  return (
    <header className="flex h-14 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <a href="#" className="mr-6 hidden lg:flex">
            <div className="flex items-center">
                <EyeClosedIcon className="h-6 w-6" />
                <p className="sr-only">The Hieves</p>
            </div>
          </a>
          <div className="grid gap-2 py-6">
            <a href="/" className="flex w-full items-center py-2 text-lg font-semibold">
              Map
            </a>
            <a href="/login" className="flex w-full items-center py-2 text-lg font-semibold">
              Login
            </a>
            <a href="/register" className="flex w-full items-center py-2 text-lg font-semibold">
              Register
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <a href="/" className="mr-6 hidden lg:flex">
        <div className="flex items-center flex-col text-black">
            <EyeClosedIcon className="h-6 w-6" />
            <p className="text-sm font-roboto">The Hieves.</p>
        </div>
      </a>
      <nav className="ml-auto hidden lg:flex gap-3 font-roboto text-black">
      <a
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-l-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Map
            <MapIcon className="ml-2 h-4 w-4 " strokeWidth={0.9} />
        </a>
        <a
          href="/login"
          className="group inline-flex h-9 w-max items-center justify-center  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Login
            <UserIcon className="ml-2 h-4 w-4" strokeWidth={0.9} />
        </a>
        <a
          href="/register"
          className="group inline-flex h-9 w-max items-center justify-center rounded-r-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Register
            <UserPlusIcon className="ml-2 h-4 w-4" strokeWidth={0.9} />
        </a>
      </nav>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}