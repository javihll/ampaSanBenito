import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";

export default function AvisoLegalPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Aviso Legal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Condiciones de uso de nuestro sitio web.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                <span>Información General</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground prose prose-lg max-w-none">
                <p>
                    En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:
                </p>
                <p>
                    La titularidad de este sitio web, ampa-san-benito.vercel.app, (en adelante, Sitio Web) la ostenta: AMPA CEIP San Benito, y cuyos datos de contacto son:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Dirección:</strong> C/ Juan Pérez Zúñiga 36, 28027 Madrid</li>
                    <li><strong>Email de contacto:</strong> sanbenito@ampasanbenito.org</li>
                </ul>
                
                <h3 className="font-headline text-xl font-semibold text-foreground">Términos y Condiciones Generales de Uso</h3>
                <h4>El objeto de las condiciones: El Sitio Web</h4>
                <p>
                    El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).
                </p>
                <p>
                    AMPA CEIP San Benito se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento AMPA CEIP San Benito pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.
                </p>
                <h4>El Usuario</h4>
                <p>
                    El acceso, la navegación y uso del Sitio Web, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.
                </p>
                 <p>
                    El Sitio Web de AMPA CEIP San Benito proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:
                </p>
                <ul className="list-disc list-inside">
                    <li>Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por AMPA CEIP San Benito sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.</li>
                    <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por AMPA CEIP San Benito para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a AMPA CEIP San Benito acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.</li>
                </ul>
                <p>
                    El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre AMPA CEIP San Benito y el Usuario.
                </p>
                 <h3 className="font-headline text-xl font-semibold text-foreground">Legislación aplicable y jurisdicción</h3>
                <p>
                    AMPA CEIP San Benito se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.
                </p>
                <p>
                    La relación entre el Usuario y AMPA CEIP San Benito se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
