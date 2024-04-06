export default function Page({ params }: { params: { city: string } }) {
  return <h1>Cidade {params.city}</h1>
}