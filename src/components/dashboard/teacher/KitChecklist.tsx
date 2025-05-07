
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface KitItem {
  id: string;
  name: string;
  checked: boolean;
}

interface KitChecklistProps {
  initialKits: KitItem[];
}

const KitChecklist: React.FC<KitChecklistProps> = ({ initialKits }) => {
  const [kits, setKits] = useState<KitItem[]>(initialKits);
  const { toast } = useToast();
  
  const handleKitToggle = (id: string) => {
    setKits(kits.map(kit => 
      kit.id === id ? { ...kit, checked: !kit.checked } : kit
    ));
    
    toast({
      title: "Kit Status Updated",
      description: "Your kit checklist has been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kit Checklist</CardTitle>
        <CardDescription>Kits to pick up for your school visits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {kits.map(kit => (
            <div 
              key={kit.id} 
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50"
            >
              <Checkbox 
                id={kit.id} 
                checked={kit.checked}
                onCheckedChange={() => handleKitToggle(kit.id)}
              />
              <label 
                htmlFor={kit.id} 
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${kit.checked ? 'line-through text-gray-500' : ''}`}
              >
                {kit.name}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => {
          setKits(kits.map(kit => ({ ...kit, checked: false })));
          toast({
            title: "Checklist Reset",
            description: "All items have been reset.",
          });
        }}>
          Reset Checklist
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KitChecklist;
