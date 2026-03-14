export async function handler(event, context) {

const data = {
name: "Ortiqboyev Alisher",
age: 13,
job: "Fullstack Developer",
location: "Jizzax viloyati Zomin tumani",
phone: "+998 99 915 63 85",
email: "you.live.11223344@gmail.com"
}

return {
statusCode: 200,
body: JSON.stringify(data)
}

}