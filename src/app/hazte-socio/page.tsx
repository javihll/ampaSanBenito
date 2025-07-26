import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ListChecks, UserPlus, Euro, FileText, Bell, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function HazteSocioPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              ¿Cómo hacerte socio/a?
            </h1>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-primary" />
                <span>Nuevos Socios y Renovaciones</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-headline text-lg font-semibold">Para antiguos socios:</h3>
                <p className="text-muted-foreground">La matrícula se renueva de manera automática, no hace falta volver a apuntarse.</p>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Para nuevos socios:</h3>
                <p className="text-muted-foreground mb-4">
                  Si tu familia aún no es socia de la asociación de familias del colegio, te animamos a darte de alta en el siguiente formulario de inscripción. Cuantas más seamos, más fuertes seremos y tendremos más capacidad para hacer y proponer mejoras y proyectos.
                </p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                   <Link href="https://docs.google.com/forms/d/e/1FAIpQLSen7Ld1voJBc34ywyz9yhu-hZ0a385OwsUkHZCRCjFuDZkaDw/viewform" target="_blank">Enlace al formulario de inscripción</Link>
                </Button>
                 <p className="text-muted-foreground mt-4">
                  En el formulario dejad bien claro vuestras direcciones de correo, pues ese será el medio habitual de comunicación, e indicad vuestra disponibilidad para participar en alguno de los grupos de trabajo de la asociación. ¡¡Os animamos vivamente a hacerlo!!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Euro className="h-8 w-8 text-primary" />
                <span>Cuotas de familia socia (curso 2024-2025)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 mt-1 text-accent" />
                        <div>
                            <span className="font-semibold text-foreground">Cuota ordinaria anual:</span> 30 euros por familia
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 mt-1 text-accent" />
                        <div>
                            <span className="font-semibold text-foreground">Cuota reducida:</span> 15 euros (1 miembro de la familia en desempleo, familias numerosas, y familias monoparentales).
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 mt-1 text-accent" />
                        <div>
                           <span className="font-semibold text-foreground">Cuota gratuita:</span> 0 euros (2 miembros de la familia en desempleo).
                        </div>
                    </li>
                </ul>
                <Alert className="mt-6">
                  <Bell className="h-4 w-4" />
                  <AlertTitle>Información de Pago</AlertTitle>
                  <AlertDescription>
                    Se realizará un único cargo en cuenta a mediados del mes de octubre.
                  </AlertDescription>
                </Alert>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <span>Documentación y Comunicaciones</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                Por favor, enviad la documentación necesaria a lo largo del mes de <strong>septiembre del 2024</strong> a la siguiente dirección de correo electrónico: <a href="mailto:sanbenito@ampasanbenito.org" className="text-primary hover:underline">sanbenito@ampasanbenito.org</a>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Justificante de la demanda de empleo</li>
                <li>Título de familia numerosa</li>
                <li>Cambios de número de cuenta</li>
                <li>Comunicación de bajas</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
