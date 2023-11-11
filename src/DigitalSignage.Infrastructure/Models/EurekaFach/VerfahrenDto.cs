﻿// SPDX-FileCopyrightText: © 2014 Oberverwaltungsgericht Rheinland-Pfalz <poststelle@ovg.jm.rlp.de>
// SPDX-License-Identifier: EUPL-1.2

namespace DigitalSignage.Infrastructure.Models.EurekaFach;

public class VerfahrenDto
{
    public Int64 Id { get; set; }
    public string Az { get; set; }
    public byte Lfdnr { get; set; }
    public byte Kammer { get; set; }
    public string Sitzungssaal { get; set; }
    public Nullable<Int64> SitzungssaalNr { get; set; }
    public string UhrzeitPlan { get; set; }
    public string UhrzeitAktuell { get; set; }
    public string Status { get; set; }
    public string Oeffentlich { get; set; }
    public string Art { get; set; }
    public string Gegenstand { get; set; }
    public string Bemerkung1 { get; set; }
    public string Bemerkung2 { get; set; }
    public ICollection<string> ParteienAktiv { get; set; }
    public ICollection<string> ProzBevAktiv { get; set; }
    public ICollection<string> ParteienPassiv { get; set; }
    public ICollection<string> ProzBevPassiv { get; set; }
    public ICollection<string> ParteienBeigeladen { get; set; }
    public ICollection<string> ProzBevBeigeladen { get; set; }
    public ICollection<string> ParteienZeugen { get; set; }
    public ICollection<string> ParteienSv { get; set; }
    public string ParteienAktivKurz { get; set; }
    public string ParteienPassivKurz { get; set; }
    public int StammdatenId { get; set; }
    public string Gericht { get; set; }
    public string Datum { get; set; }
    public ICollection<string> Besetzung { get; set; }
    public ICollection<string> ParteienBeteiligt { get; set; }
    public virtual ICollection<Objekte> Objekte { get; set; }
}