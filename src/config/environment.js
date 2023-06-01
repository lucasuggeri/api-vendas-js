const config = {
    db_database : process.env.DATABASE_DATABASE || 'api-vendas',
    db_hostname : process.env.DATABASE_DATABASE || 'localhost',
    db_PORT     : process.env.DATABASE_PORT     ||      2707,
    port : process.env.PORT || 8080,
    
     
}

export default config;