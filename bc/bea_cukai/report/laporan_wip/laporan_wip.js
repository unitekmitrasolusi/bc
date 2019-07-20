// Copyright (c) 2016, PT. UNITEK MAS INDONESIA and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Laporan WIP"] = {
	"filters":[
	{
		"fieldname":"from_date",
		"label": __("From Date"),
		"fieldtype": "Date",
		"width": "80",
		"reqd": 1,
		"default": frappe.sys_defaults.year_start_date
	},
	{
		"fieldname":"to_date",
		"label": __("To Date"),
		"fieldtype": "Date",
		"width": "80",
		"reqd": 1,
		"default": frappe.datetime.get_today()
	},
	{
		"fieldname": "warehouse",
		"label": __("Gudang"),
		"fieldtype": "Link",
		"width": "80",
		"options": "Warehouse",
		"default": "Work In Progress - STI"

	},
		]}
