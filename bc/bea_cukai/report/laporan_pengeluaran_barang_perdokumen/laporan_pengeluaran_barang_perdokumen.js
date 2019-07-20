// Copyright (c) 2016, PT. UNITEK MAS INDONESIA and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Laporan Pengeluaran Barang Perdokumen"] = {
	"filters": [
		{
			"fieldname":"jenis_dokumen_bc",
			"label":("Jenis Dokumen"),
			"fieldtype":"Select",
			"options":["BC.3.0","BC.2.5","BC.2.7","BC.2.6.1","BC.4.1","BA Pemusnahan"]
		},
				{
			"fieldname":"from_date",
			"label": __("Dari Tanggal"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("Sampai Tanggal"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		}
		

			]
}