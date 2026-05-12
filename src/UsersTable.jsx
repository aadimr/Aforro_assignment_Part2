function UsersTable({ users }) {
    return (
        <div
            style={{
                overflowX: "auto",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "none",
                }}
            >
                <thead
                    style={{
                        backgroundColor: "#F3F4F6",
                    }}
                >
                    <tr>
                        <th
                            style={{
                                textAlign: "left",
                                padding: "16px",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#374151",
                            }}
                        >
                            Name
                        </th>

                        <th
                            style={{
                                textAlign: "left",
                                padding: "16px",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#374151",
                            }}
                        >
                            Email
                        </th>

                        <th
                            style={{
                                textAlign: "left",
                                padding: "16px",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#374151",
                            }}
                        >
                            Company
                        </th>

                        <th
                            style={{
                                textAlign: "left",
                                padding: "16px",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#374151",
                            }}
                        >
                            City
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            style={{
                                borderBottom: "1px solid #E5E7EB",
                            }}
                        >
                            <td
                                style={{
                                    padding: "16px",
                                    fontSize: "14px",
                                    color: "#111827",
                                    fontWeight: "500",
                                    textAlign: "left"
                                }}
                            >
                                {user.name}
                            </td>

                            <td
                                style={{
                                    padding: "16px",
                                    fontSize: "14px",
                                    color: "#6B7280",
                                    textAlign: "left"
                                }}
                            >
                                {user.email}
                            </td>

                            <td
                                style={{
                                    padding: "16px",
                                    fontSize: "14px",
                                    color: "#6B7280",
                                    textAlign: "left"
                                }}
                            >
                                {user.company.name}
                            </td>

                            <td
                                style={{
                                    padding: "16px",
                                    fontSize: "14px",
                                    color: "#6B7280",
                                    textAlign: "left"
                                }}
                            >
                                {user.address.city}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;