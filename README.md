# LoggerClassGenerator
Create custom logger class name for log4Net.

Enter .Net class name each in newline and click generate the get custom logger tag statement.

**Sample input class name**
- System.Net
- System.Linq
- System.Collections.ArrayList

**Output**
```xml
<logger name="System.Net">
    <level value="Debug"/>
</logger>
<logger name="System.Linq">
    <level value="Debug"/>
</logger>
<logger name="System.Collections.ArrayList">
    <level value="Debug"/>
</logger>
```
Demo link - https://muaaz08.github.io/LoggerClassGenerator/
