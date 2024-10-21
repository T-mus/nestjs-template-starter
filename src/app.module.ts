import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { getMongoConfig } from './config/mongo.config'
import { JwtAuthModule } from './modules/jwt-auth/jwt-auth.module'
import { UsersModule } from './modules/users/users.module'

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env`, isGlobal: true }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoConfig,
        }),
        JwtAuthModule,
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
