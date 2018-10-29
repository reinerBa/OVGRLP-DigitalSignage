import { Termin } from "@ds-suite/model";

export class TerminFunctions {
  public static IstPersonalvertretung(termin: Termin) {
    return termin.gericht === "Oberverwaltungsgericht Rheinland-Pfalz" &&
      (termin.kammer == 4 || termin.kammer == 5);
  }

  public static IstBeschlussverfahren(termin: Termin) {
    return termin.gericht === "Arbeitsgericht Koblenz" &&
      termin.az.includes(' BV ');
  }

  public static IstSenat(termin: Termin) {
    return (termin.gericht === "Oberverwaltungsgericht Rheinland-Pfalz" ||
    termin.gericht === "Verfassungsgerichtshof Rheinland-Pfalz");
  }

}