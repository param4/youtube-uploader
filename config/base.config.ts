class BaseConfig {
    public PORT: number = parseInt(process.env.PORT || '3000', 10);

}

const baseConfig = new BaseConfig();

export default ()=> baseConfig;