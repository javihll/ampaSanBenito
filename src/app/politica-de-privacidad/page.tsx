import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tu privacidad es importante para nosotros.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <span>Protección de Datos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground prose prose-lg max-w-none">
              <p>
                La presente Política de Privacidad establece los términos en que AMPA CEIP San Benito usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta asociación está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.
              </p>
              
              <h3 className="font-headline text-xl font-semibold text-foreground">Información que es recogida</h3>
              <p>
                Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar alguna solicitud o realizar una entrega o facturación.
              </p>
              
              <h3 className="font-headline text-xl font-semibold text-foreground">Uso de la información recogida</h3>
              <p>
                Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
              </p>
              <p>
                AMPA CEIP San Benito está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
              </p>
              
              <h3 className="font-headline text-xl font-semibold text-foreground">Control de su información personal</h3>
              <p>
                En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
              </p>
              <p>
                Esta asociación no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
              </p>
              <p>
                AMPA CEIP San Benito Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
