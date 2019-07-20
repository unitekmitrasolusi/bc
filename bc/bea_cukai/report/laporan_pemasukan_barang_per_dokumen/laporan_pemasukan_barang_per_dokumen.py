# Copyright (c) 2013, PT. UNITEK MAS INDONESIA and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns, data = [], []
	return columns, data

def get_data():
    return [{
            "label": _("Jenis Dokumen"),
            "items": [{
                "type": "report",
                "name": "Jenis Dokumen",
                "doctype": "Permasukan Barang",
                "is_query_report": True
            }]
        }]