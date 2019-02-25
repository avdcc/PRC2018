<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output method="text" indent="yes"/>
    
    <xsl:template match="/">

      <xsl:apply-templates select="prizes/*"/>   
      <xsl:apply-templates select="//person"/>

    </xsl:template>
    
    <xsl:template match="prize">

      ###  http://www.prc.di.uminho.pt/2019/prizes#<xsl:value-of select="year"/><xsl:value-of select="category"/>

      #
      :<xsl:value-of select="year"/><xsl:value-of select="category"/> ; rdf:type owl:NamedIndividual , :Prize ;
            
        <xsl:for-each select="laureates/person">
          :hasLaureate <xsl:value-of select="id"/> ;
        </xsl:for-each>

        <xsl:choose>
          <xsl:when test="overallMotivation"> 
            :overallMotivation <xsl:value-of select="overallMotivation"/>  ;
          </xsl:when>
        </xsl:choose>

        :category <xsl:value-of select="category"/>  ;
        :year <xsl:value-of select="year"/>  .


    </xsl:template>
    
    <xsl:template match="person">

      ###  http://www.prc.di.uminho.pt/2019/prizes#<xsl:value-of select="id"/>

      #      
      :<xsl:value-of select="id"/> rdf:type owl:NamedIndividual , :Person ;
        :firstname "<xsl:value-of select="firstname"/>" ;
        <xsl:if test="motivation">
          :motivation <xsl:value-of select="motivation"/>;
        </xsl:if>
        :share <xsl:value-of select="share"/> ;
        :surname "<xsl:value-of select="surname"/>" .
      </xsl:template>
    
    </xsl:template>

</xsl:stylesheet>