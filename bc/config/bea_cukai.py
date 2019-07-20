
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Pemasukan"),
			"items": [
				{
					"type": "doctype",
					"name": "Pemasukan Barang",
					"description": _("Employee records."),
				},
				{
					"type": "report",
					"name": "Laporan Pemasukan Barang Per Dokumen",
					"doctype": "Pemasukan Barang",
					"description": _("Employee records."),
					"is_query_report": True,
				},

							]
		},
		{
			"label": _("Pengeluaran"),
			"items": [
				{
					"type": "doctype",
					"name": "Pengeluaran Barang",
					"description": _("Opening for a Job."),
				},
				{
					"type": "report",
					"name": "Laporan Pengeluaran Barang Perdokumen",
					"doctype": "Pengeluaran Barang",
					"description": _("Employee records."),
					"is_query_report": True,
				},

							]
		},
		{
			"label": _("Laporan"),
			"items": [
				{
					"type": "report",
					"name": "Laporan Pertanggung Jawaban",
					"description": _("Applications for leave."),
					"doctype": "wip",
					"is_query_report": True,
					

				},
				{
					"type": "report",
					"name": "Laporan WIP",
					"description": _("Applications for leave."),
					"doctype": "wip",
					"is_query_report": True,

				},
				{
					"type": "report",
					"name": "Laporan Pertanggung jawaban Barang Jadi",
					"description": _("Applications for leave."),
					"doctype": "wip",
					"is_query_report": True,


				},
				{
					"type": "report",
					"name": "Laporan Posisi Barang",
					"description": _("Applications for leave."),
					"doctype": "wip",
					"is_query_report": True,

				},
				{
					"type": "report",
					"name": "Laporan Pertanggungjawaban Mutasi Bahan Baku dan Bahan Penolong",
					"description": _("Applications for leave."),
					"doctype": "wip",
					"is_query_report": True,

				},



				
			]
		},
		{
			"label": _("Lainnya"),
			"items": [
				{
					"type": "page",
					"label": "Live CCTV",
					"name": "cctv",
					"description": _("Monthly salary statement."),
				},
				{
					"type": "page",
					"label": "Log Activity",
					"name": "activity",
					"description": _("Monthly salary statement."),
				},

				
			]
		}
	]