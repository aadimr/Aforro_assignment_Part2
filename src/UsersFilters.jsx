function UsersFilters({
    search,
    setSearch,
    sortOrder,
    setSortOrder,
    cityFilter,
    setCityFilter,
    cities,
}) {
    return (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>

            <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="asc">Name A-Z</option>
                <option value="desc">Name Z-A</option>
            </select>

            <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
            >
                <option value="">All Cities</option>

                {cities.map((city) => (
                    <option
                        key={city}
                        value={city}
                    >
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UsersFilters;