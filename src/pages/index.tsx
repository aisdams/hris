import Image from 'next/image'

export default function Home() {
  const dataHr = [
    {
      title: "Staff",
      total: '23',
      color: '#6fd943'
    },
    {
      title: "Ticket",
      total: '9',
      color: '#3ec9d6'
    },
    {
      title: "Account Balance",
      total: '$2,045,619.00',
      color: '#ffa21d'
    },
    {
      title: "Jobs",
      total: '4',
      color: '#6fd943'
    },
    {
      title: "Active Jobs",
      total: '4',
      color: '#3ec9d6'
    },
    {
      title: "Inactive Jobs",
      total: '0',
      color: '#ffa21d'
    },
  ]
  return (
    <main
      className=""
    >
      <h1>Dashboard</h1>
      <div className="grid grid-cols-3">
        {dataHr.map((datahr,idx) => (
          <div key={idx} className='bg-red-500 flex'>
            <div className="w-14 h-14"></div>
            <div className="flex">
              <div className="grid">
              <p>Total</p>
                <h1>{datahr.title}</h1>
             </div>
             <h1>{datahr.total}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="bg-green-500">
        </div>
      </div>
    </main>
  )
}
