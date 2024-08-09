import { Button } from '@mui/material';

export const DownloadCV = () => {
  const handleDownload = () => {
    // URL del archivo PDF que quieres descargar
    const pdfUrl = 'https://github.com/juan-suarez/portfolio/blob/main/public/JuanManuelSuarez.pdf';
    
    // Crear un enlace y hacer clic en él para iniciar la descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'JuanManuelSuarez.pdf'; // Nombre del archivo al descargar
    link.click();
  };

  return (
    <Button onClick={handleDownload}>
      Descargar HV
    </Button>
  );
};
