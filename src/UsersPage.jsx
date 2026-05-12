import { useEffect, useMemo, useState } from "react";
import UsersFilters from "./UsersFilters";
import UsersTable from "./UsersTable";
import { fetchUsers } from "./usersApi";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [cityFilter, setCityFilter] = useState("");

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await fetchUsers();

                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    const cities = useMemo(() => {
        return [...new Set(users.map((user) => user.address.city))];
    }, [users]);

    const filteredUsers = useMemo(() => {
        let updatedUsers = [...users];

        if (search) {
            updatedUsers = updatedUsers.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    user.email
                        .toLowerCase()
                        .includes(search.toLowerCase())
            );
        }

        if (cityFilter) {
            updatedUsers = updatedUsers.filter(
                (user) => user.address.city === cityFilter
            );
        }

        updatedUsers.sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            }

            return b.name.localeCompare(a.name);
        });

        return updatedUsers;
    }, [users, search, cityFilter, sortOrder]);

    return (
        <div
            style={{
                padding: "24px",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "24px",
                        flexWrap: "wrap",
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "24px",
                            fontWeight: "600",
                            color: "#111827",
                        }}
                    >
                        Users Table
                    </h2>

                    <UsersFilters
                        search={search}
                        setSearch={setSearch}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        cityFilter={cityFilter}
                        setCityFilter={setCityFilter}
                        cities={cities}
                    />
                </div>

                {loading && (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "30px 0",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#5D5FEF",
                        }}
                    >
                        Loading...
                    </div>
                )}

                {error && (
                    <div
                        style={{
                            backgroundColor: "#FEE2E2",
                            color: "#DC2626",
                            padding: "14px",
                            borderRadius: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        {error}
                    </div>
                )}

                {/* Table */}
                {!loading && !error && (
                    <UsersTable users={filteredUsers} />
                )}
            </div>
        </div>
    );
}

export default UsersPage;