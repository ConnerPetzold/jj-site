"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ChevronsUpDownIcon, SearchSlashIcon } from "lucide-react";
import { currentVersion, remoteVersions, Version } from "@/lib/versions";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function VersionPicker() {
  const [open, setOpen] = React.useState(false);
  const [versions, setVersions] = React.useState<Version[]>([]);
  React.useEffect(() => {
    remoteVersions.then(setVersions);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          {currentVersion.version}
          <ChevronsUpDownIcon size={10} className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Version..." />
          <CommandList>
            <CommandEmpty className="flex justify-center items-center py-2">
              <SearchSlashIcon className="opacity-30" />
            </CommandEmpty>
            <CommandGroup>
              {[{ version: "Canary", url: "/" }, ...versions].map(
                ({ version, url }) => (
                  <CommandItem
                    key={version}
                    value={version}
                    asChild
                    onSelect={() => {
                      setOpen(false);
                    }}
                  >
                    <Link
                      href={url}
                      className={cn(version === "Canary" && "text-fd-warning")}
                    >
                      {version}
                    </Link>
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
