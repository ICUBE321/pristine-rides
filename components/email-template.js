export default function EmailTemplate(content) {
  return (
    <div>
      <h1>New Booking Request!</h1>
      <p>Name: {content.name}</p>
      <p>Email: {content.email}</p>
      <p>Phone number: {content.phone}</p>
      <p>Vehicle Make: {content.make}</p>
      <p>Vehicle Model: {content.model}</p>
      <p>Vehicle Year: {content.year}</p>
      <p>Type of car: {content.service}</p>
      <p>Preferred date and time: {content.datetime}</p>
      <p>Notes from client: {content.message}</p>
      <p>Does client want to receive promo emails? {content.remember}</p>
    </div>
  );
}
