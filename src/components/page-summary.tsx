'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Wand2, AlertTriangle, Loader2 } from 'lucide-react';
import { summarizePage } from '@/app/actions';

export default function PageSummary({ content }: { content: string }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Strip HTML tags for the AI model
  const plainTextContent = content.replace(/<[^>]*>?/gm, ' ');

  const handleSummarize = async () => {
    setLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizePage(plainTextContent);
      if (result) {
        setSummary(result);
      } else {
        setError('No se pudo generar el resumen. Por favor, inténtelo de nuevo más tarde.');
      }
    } catch (e) {
      setError('Ocurrió un error al conectar con el servicio de IA.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-headline text-2xl font-semibold">¿Poco tiempo?</h3>
      <p className="text-muted-foreground">Usa nuestra IA para obtener un resumen rápido del contenido de esta página.</p>
      <Button onClick={handleSummarize} disabled={loading} className="gap-2">
        {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
            <Wand2 className="h-4 w-4" />
        )}
        {loading ? 'Generando...' : 'Resumir con IA'}
      </Button>
      
      {error && (
         <Alert variant="destructive" className="mt-4">
           <AlertTriangle className="h-4 w-4" />
           <AlertTitle>Error</AlertTitle>
           <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}

      {summary && (
        <Card className="mt-4 bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Wand2 className="h-5 w-5 text-accent" />
              Resumen IA
            </CardTitle>
            <CardDescription>Este es un resumen generado automáticamente. Puede contener imprecisiones.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-foreground">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
