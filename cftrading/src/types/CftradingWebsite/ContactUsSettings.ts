
export interface ContactUsSettings{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Forward To Email Address : Data - Send enquiries to this email address	*/
	forward_to_email?: string
	/**	Heading : Data - Default: "Contact Us"	*/
	heading?: string
	/**	Introduction : Text Editor - Introductory information for the Contact Us Page	*/
	introduction?: string
	/**	Query Options : Small Text - Contact options, like "Sales Query, Support Query" etc each on a new line or separated by commas.	*/
	query_options?: string
	/**	Address Title : Data	*/
	address_title?: string
	/**	Address Line 1 : Data	*/
	address_line1?: string
	/**	Address Line 2 : Data	*/
	address_line2?: string
	/**	City : Data	*/
	city?: string
	/**	State : Data	*/
	state?: string
	/**	Pincode : Data	*/
	pincode?: string
	/**	Country : Data	*/
	country?: string
	/**	Phone : Data	*/
	phone?: string
	/**	Email Id : Data	*/
	email_id?: string
	/**	Skype : Data	*/
	skype?: string
}