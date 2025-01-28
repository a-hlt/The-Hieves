import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { 
    ThermometerIcon, 
    Droplets, 
    Wind, 
    CloudRainWind,
    Waves,
    GaugeCircle,
    Calendar,
    CloudRain,
    AlertTriangle
} from "lucide-react"

interface InformationDialogProps {
    zoneInfo: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function InformationDialog({ zoneInfo, open, onOpenChange }: InformationDialogProps) {
    if (!zoneInfo) return null;

    const stats = [
        {
            title: "Température",
            value: `${zoneInfo.properties.temperature}°C`,
            icon: <ThermometerIcon className="w-8 h-8 text-red-500" />
        },
        {
            title: "Humidité",
            value: `${zoneInfo.properties.humidite}%`,
            icon: <Droplets className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Force du Vent",
            value: `${zoneInfo.properties.force_moyenne_du_vecteur_de_vent} km/h`,
            icon: <Wind className="w-8 h-8 text-gray-500" />
        },
        {
            title: "Vent Maximum",
            value: `${zoneInfo.properties.force_du_vecteur_de_vent_max} km/h`,
            icon: <CloudRainWind className="w-8 h-8 text-gray-700" />
        },
        {
            title: "Sismicité",
            value: zoneInfo.properties.sismicite.toFixed(2),
            icon: <Waves className="w-8 h-8 text-orange-500" />,
            alert: zoneInfo.properties.seisme === "True" ? 
                <AlertTriangle className="w-5 h-5 text-red-500 ml-2" /> : null
        },
        {
            title: "Concentration Gaz",
            value: `${zoneInfo.properties.concentration_gaz.toFixed(2)} ppm`,
            icon: <GaugeCircle className="w-8 h-8 text-purple-500" />
        },
        {
            title: "Pluie Totale",
            value: `${zoneInfo.properties.pluie_totale} mm`,
            icon: <CloudRain className="w-8 h-8 text-blue-400" />
        },
        {
            title: "Intensité Pluie",
            value: `${zoneInfo.properties.pluie_intensite_max} mm/h`,
            icon: <CloudRain className="w-8 h-8 text-blue-600" />,
            alert: zoneInfo.properties.inondation === "True" ? 
                <AlertTriangle className="w-5 h-5 text-yellow-500 ml-2" /> : null
        },
        {
            title: "Date",
            value: new Date(zoneInfo.properties.date).toLocaleDateString(),
            icon: <Calendar className="w-8 h-8 text-green-500" />
        }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">
                        {zoneInfo.properties.Zone} - Statistiques
                    </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                {stat.icon}
                            </div>
                            <div className="ml-4 flex items-center">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-xl font-semibold">{stat.value}</p>
                                </div>
                                {stat.alert}
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
