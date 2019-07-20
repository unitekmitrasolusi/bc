// Copyright (c) 2016, PT. UNITEK MAS INDONESIA and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Laporan Pemasukan Barang Per Dokumen"] = {
	"filters": [
		
	{
			"fieldname":"jenis_dokumen_bc",
			"label":("Jenis Dokumen"),
			"fieldtype":"Select",
			"options":["","BC.2.3","BC.2.7","BC.2.6.2","BC.4.0"]
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
