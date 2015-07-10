# shaniquaid
XLIFF Unique ID Generator

# Installation:
```
I HAVE NO IDEA HOW TO PUBLISH THIS YET...
```

# Usage:
```
node shaniquaid translation.xliff
```

Will output a file with "id" values sequenced from 1 to ∞

## Original file
```
<trans-unit id="123">
    <source>intro</source>
    <target><![CDATA[Lorem Ipsum]]></target>
</trans-unit>

<trans-unit id="456">
    <source>copy</source>
    <target><![CDATA[Dolorem si amet.]]></target>
</trans-unit>
```
## Shaniquaid!
```
<trans-unit id="1">
    <source>intro</source>
    <target><![CDATA[Lorem Ipsum]]></target>
</trans-unit>

<trans-unit id="2">
    <source>copy</source>
    <target><![CDATA[Dolorem si amet.]]></target>
</trans-unit>
```
