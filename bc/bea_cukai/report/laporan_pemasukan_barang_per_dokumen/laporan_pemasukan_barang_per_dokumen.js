// Copyright (c) 2016, PT. UNITEK MAS INDONESIA and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Laporan Pemasukan Barang Per Dokumen"] = {
	"filters": [
		
	{
			"fieldname":"jenis_dokumen",
			"label":("Jenis Dokumen"),
			"fieldtype":"Select",
			"options":["BC.2.3","BC.2.7","BC.2.6.2","BC.4.0"],
			"default":["BC.2.3"]
		},
			{
		"fieldname":"from_date",
		"label": __("From Date"),
		"fieldtype": "Date",
		"width": "80",
		"default": frappe.datetime.month_start()
	},
	{
		"fieldname":"to_date",
		"label": __("To Date"),
		"fieldtype": "Date",
		"width": "80",
		"default": frappe.datetime.month_end()
	}	

			]
}
