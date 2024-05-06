
export interface Contact{
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
	/**	First Name : Data	*/
	first_name?: string
	/**	Middle Name : Data	*/
	middle_name?: string
	/**	Last Name : Data	*/
	last_name?: string
	/**	Full Name : Data	*/
	full_name?: string
	/**	Email Address : Data	*/
	email_id?: string
	/**	User Id : Link - User	*/
	user?: string
	/**	Address : Link - Address	*/
	address?: string
	/**	Sync with Google Contacts : Check	*/
	sync_with_google_contacts?: 0 | 1
	/**	Status : Select	*/
	status?: "Passive" | "Open" | "Replied"
	/**	Salutation : Link - Salutation	*/
	salutation?: string
	/**	Designation : Data	*/
	designation?: string
	/**	Gender : Link - Gender	*/
	gender?: string
	/**	Phone : Data	*/
	phone?: string
	/**	Mobile No : Data	*/
	mobile_no?: string
	/**	Company Name : Data	*/
	company_name?: string
	/**	Image : Attach Image	*/
	image?: string
	/**	Google Contacts : Link - Google Contacts	*/
	google_contacts?: string
	/**	Google Contacts Id : Data	*/
	google_contacts_id?: string
	/**	Pulled from Google Contacts : Check	*/
	pulled_from_google_contacts?: 0 | 1
	/**	Email IDs : Table - Contact Email	*/
	email_ids?: any
	/**	Contact Numbers : Table - Contact Phone	*/
	phone_nos?: any
	/**	Links : Table - Dynamic Link	*/
	links?: any
	/**	Is Primary Contact : Check	*/
	is_primary_contact?: 0 | 1
	/**	Is Billing Contact : Check	*/
	is_billing_contact?: 0 | 1
	/**	Department : Data	*/
	department?: string
	/**	Unsubscribed : Check	*/
	unsubscribed?: 0 | 1
}