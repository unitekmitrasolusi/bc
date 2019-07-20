# Copyright (c) 2013, PT. UNITEK MAS INDONESIA and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns = [{
    "fieldname": "naming_series",
    "label": _("Series"),
    "fieldtype": "select",
    "options": "SI-BC-OUT-.YYYY.-",
    "width": 300
},
]