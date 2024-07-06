// import BackButton from "@/components/BackButton"

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  console.log(res)
  return res.json()
}
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}

interface Params {
  params: {name: string}}



export default async function Page({params}: Params) {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedCountry(params.name)

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData])



  return (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> Your Prediction </div>
      <div className="block mt-1 text-lg leading-tight font-medium text-black"> You are: {age?.age} years old </div>
      <div className="block mt-1 text-lg leading-tight font-medium text-black"> Your gender is: {gender?.gender} </div>
      <div className="block mt-1 text-lg leading-tight font-medium text-black"> Your country is: {country?.country_id} </div>
    </div>
    {/* <BackButton/> */}

  </div>
  )
}