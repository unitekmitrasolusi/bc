frappe.pages['sisitipi'].on_page_load = function(wrapper) {
     	new MyPage(wrapper);
}

MyPage = Class.extend({
	init: function(wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'CCTV',
			single_column: true
		});
		this.make();
	},
	make: function() {
		$(frappe.render_template("sisitipi", this)).appendTo(this.page.main);
	}
})