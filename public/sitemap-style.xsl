<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/urlset">
        <html>
            <head>
                <title>Amire Joseph's Sitemap</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #333; }
                    ul { list-style-type: none; padding: 0; }
                    li { margin: 10px 0; }
                    a { text-decoration: none; color: #007BFF; }
                    a:hover { text-decoration: underline; }
                    .priority { font-weight: bold; color: #555; }
                </style>
            </head>
            <body>
                <h1>Amire Joseph's Sitemap</h1>
                <ul>
                    <xsl:for-each select="url">
                        <li>
                            <a href="{loc}"><xsl:value-of select="loc"/></a><br/>
                            <span>Last Modified: <xsl:value-of select="lastmod"/></span><br/>
                            <span class="priority">Priority: <xsl:value-of select="priority"/></span>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
