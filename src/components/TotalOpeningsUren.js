export default function TotalOpeningsuren({img}) {
    return(
        <div className="flex justify-between bottom-0 right-0 pl-3">  
            <div className="flex flex-col">
                <p className="m-0"><strong>Adres:</strong> Brusselsesteenweg 23, Winksele</p>
                <table>
                    <thead>
                        <tr><th className="text-left">Openingsuren:</th></tr>
                    </thead>
                    <tbody className="flex flex-col justify-between">
                    <tr>
                        <th className="text-left">MA - VR:</th>
                        <td className="text-right">06:00 – 19.00</td>
                    </tr>
                    <tr>
                        <th className="text-left">ZAT:</th>
                        <td className="text-right">08:00 – 18.00</td>
                    </tr>
                    <tr>
                        <th className="text-left">ZON:</th>
                        <td className="text-right">09:00 – 16.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <img
                src={img}
                alt="total energies"
                className="w-48"
            />  
        </div>
    )
}