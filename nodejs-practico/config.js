module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    jwt: {
        secrect: process.env.JWT_SECRET || null
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || null,
        password: process.env.MYSQL_PASS || null,
        database: process.env.MYSQL_DB || null
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001
    }
}