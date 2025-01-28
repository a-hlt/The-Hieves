import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Thermometer, Droplets, Mountain } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function MapNav() {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleValueChange = (value: string | null) => {
        setSelectedValue(value);
    };

    return (
        <ToggleGroup
            type="single"
            className="map-nav absolute bg-white z-10 flex items-center justify-center rounded-3xl max-w-32 h-10 inset-0 p-4 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 top-12"
            onValueChange={handleValueChange}
        >
            <ToggleGroupItem value="thermometer" aria-label="Toggle thermometer" className="rounded-3xl">
                <Thermometer />
            </ToggleGroupItem>
            <ToggleGroupItem value="droplets" aria-label="Toggle droplets" className="rounded-3xl">
                <Droplets />
            </ToggleGroupItem>
            <ToggleGroupItem value="earthquake" aria-label="Toggle earthquake" className="rounded-3xl">
                <Mountain />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}

export default MapNav;