export enum FormatoData {
  dia_mes = "dd/mm",
  completa = "dd/mm/aaaa",
  completaComDia = "dddd, dd/mm/aaaa"
}

export function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }
  
  export function formatarData(data: Date, formato: FormatoData): string {
    switch(formato){
      case FormatoData.dia_mes:
        return data.toLocaleDateString("pt-br", {
          day: "2-digit",
          month: "2-digit"
        });

      case FormatoData.completa:
          return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          });
      case FormatoData.completaComDia:
      const formatada = data.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    return formatada.charAt(0).toUpperCase() + formatada.slice(1);
  }
  return data.toLocaleDateString("pt-br");
  }
  