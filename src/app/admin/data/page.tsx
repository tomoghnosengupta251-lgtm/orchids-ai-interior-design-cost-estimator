import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";
import Estimate from "@/models/Estimate";
import { connectDB } from "@/lib/db";

export default async function AdminData() {
  const cookie = (await cookies()).get("adminAuth")?.value;
  if (!cookie) return <div>Unauthorized</div>;

  try { jwt.verify(cookie, process.env.JWT_SECRET!); } catch { return <div>Unauthorized</div>; }

  await connectDB();
  const users = await User.find().lean();
  const estimates = await Estimate.find().populate("userId").lean();

  return (
    <div className="p-8 space-y-8">
      <h2 className="font-bold text-3xl">Users</h2>
      <table border={1} cellPadding={6}>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.pincode}</td>
              <td>{new Date(u.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="font-bold text-3xl">Estimates</h2>
      <table border={1} cellPadding={6}>
        <tbody>
          {estimates.map(e => (
            <tr key={e._id}>
              <td>{e.userId?.name}</td>
              <td>{e.bhk}</td>
              <td>{e.basePackage}</td>
              <td>
                {e.upgrades.map((up: { name: string; cost: number }) => (
                    <div key={up.name}>{up.name} - ₹{up.cost}</div>
                ))}
              </td>
              <td>{e.complexityFactor}</td>
              <td>{e.totalCost}</td>
              <td>{new Date(e.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
