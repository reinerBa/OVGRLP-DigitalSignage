import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DisplayService, Display } from 'ds-core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  display: Display;

  termine = [{ "id": 248, "az": "2 K 8343/16.TR", "lfdnr": 1, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "09:30", "uhrzeitAktuell": "09:30", "status": "Abgeschlossen", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Flüchtlingsrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["1. Muhammad Yousef SYED\r", "2. Shazia Farhat SYED\r", "3. Kindes Syeda Qanita Ismat SYED vertreten durch die Eltern Muhammad Yousef und Shazia Farhat SYED\r", "4. Kindes Syeda Fatima SYED vertreten durch die Eltern Muhammad Yousef und Shazia Farhat SYED\r", "5. Kindes Syeda Bariah SYED vertreten durch die Eltern Muhammad Yousef und Sharzia Farhat SYED\r"], "prozBevAktiv": ["Proz.-Bev.: zu 1-5: Rechtsanwälte Ehrmann & Webers\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "1. Muhammad Yousef SYED\r u.a.", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }, { "id": 251, "az": "2 K 6576/16.TR", "lfdnr": 2, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "10:15", "uhrzeitAktuell": "10:15", "status": "Abgeschlossen", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Flüchtlingsrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["Muhammad ARIF\r"], "prozBevAktiv": ["Proz.-Bev.: Rechtsanwälte Ehrmann & Webers\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "Muhammad ARIF\r", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }, { "id": 255, "az": "2 K 6990/16.TR", "lfdnr": 3, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "11:45", "uhrzeitAktuell": "11:45", "status": "Läuft", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Asylrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["Junaid KHALID\r"], "prozBevAktiv": ["Proz.-Bev.: Rechtsanwälte Olivier & Wagener\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "Junaid KHALID\r", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }, { "id": 256, "az": "2 K 8050/16.TR", "lfdnr": 4, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "12:15", "uhrzeitAktuell": "12:15", "status": "", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Flüchtlingsrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["1. Sadi Zakarya KHAN\r", "2. Shazia Ambreen KHAN\r", "3. Kindes Hamna Sadi KHAN vertreten durch die Eltern Sadi Zakarya und Shazia Ambreen KHAN\r", "4. Kindes Sofia Malahat KHAN vertreten durch die Eltern Sadi Zakarya und Shazia Ambreen KHAN\r"], "prozBevAktiv": ["Proz.-Bev.: zu 1-4: Rechtsanwälte Olivier & Wagener\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "1. Sadi Zakarya KHAN\r u.a.", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }, { "id": 258, "az": "2 K 6749/16.TR", "lfdnr": 5, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "12:45", "uhrzeitAktuell": "12:45", "status": "", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Flüchtlingsrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["1. Mohammad Imran KHAN alias Mohammad IMRAN\r", "2. Farhat Imran KHAN alias Farhat IMRAN\r", "3. Kindes Manahil Imran KHAN alias Manahit IMRAN vertreten durch die Eltern Mohammad Imran KHAN,und Farhat Imran KHAN\r", "4. Kindes Laiba Imran KHAN alias Laiba IMRAN vertreten durch die Eltern Mohammad Imran KHAN,und Farhat Imran KHAN\r"], "prozBevAktiv": ["Proz.-Bev.: zu 1-4: Rechtsanwalt Oliver Rahnama\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "1. Mohammad Imran KHAN alias Mohammad IMRAN\r u.a.", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }, { "id": 260, "az": "2 K 8251/16.TR", "lfdnr": 6, "kammer": 2, "sitzungssaal": "Sitzungssaal I", "uhrzeitPlan": "14:45", "uhrzeitAktuell": "14:45", "status": "", "oeffentlich": "ja", "art": "mündliche Verhandlung", "gegenstand": "Flüchtlingsrechts", "bemerkung1": "ER Mons (Asyl)", "bemerkung2": "", "parteienAktiv": ["Kamran Zakarya KHAN\r"], "prozBevAktiv": ["Proz.-Bev.: Rechtsanwälte Olivier & Wagener\r"], "parteienPassiv": ["Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r"], "prozBevPassiv": [], "parteienBeigeladen": [], "prozBevBeigeladen": [], "parteienZeugen": [], "parteienSv": [], "parteienAktivKurz": "Kamran Zakarya KHAN\r", "parteienPassivKurz": "Bundesrepublik Deutschland vertreten durch den Leiter des Bundesamtes für Migration und Flüchtlinge,,- Außenstelle Trier -\r", "stammdatenId": 33, "gericht": "Verwaltungsgericht Trier", "datum": "11.05.2017", "besetzung": ["Richter am Verwaltungsgericht Mons"] }]

  constructor(
    private displayService: DisplayService,
    private route: ActivatedRoute) { }

  loadDisplay() {
    this.route.params
      .switchMap((params: Params) => this.displayService.getDisplay(params['name']))
      .subscribe(display => {
        this.display = display;
      })
  }

  ngOnInit() {
    this.loadDisplay();
  }
}
