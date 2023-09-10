### Nest核心基础
#### 控制器（controller）
控制器负责处理传入的 requests 并将 responses 返回给客户端
控制器的目的是接受特定的请求
如下：使用@Controller()声明一个AppController类（@Controller()有一个可选参数，传入类型为string）
```js
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller()
```
Nest 为所有标准的 HTTP 方法提供装饰器： @Get()、@Post()、@Put()、@Delete()、@Patch()、@Options() 和 @Head()。 此外，@All() 定义了一个端点来处理所有这些。

通过@Body、@Param、@Query（Nest开箱即用的装饰器）获取对应参数

#### 提供者（）
