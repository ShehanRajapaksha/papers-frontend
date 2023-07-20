import { Button, Input } from '@material-tailwind/react'
import React from 'react'

export default function Search() {
  return (
    <div className="relative py-2 px-3 flex flex-row w-full gap-2 md:w-max md:flex-row md:items-center" >
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "w-full md:w-auto",
              }}
            />
            <Button size="sm" className="!md:absolute md:right-1 md:top-2 rounded">
              Search
            </Button>
          </div>
  )
}
