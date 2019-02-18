<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  exclude-result-prefixes="xs"
  version="2.0">
    
  <xsl:output method="text" indent="yes"/>
    
  <xsl:template match="/">
    <xsl:apply-templates select="bibliography/*"/>
    <xsl:apply-templates select="//authors|//editor"/>
  </xsl:template>
    
  <xsl:template match="bibliography/*">
    <xsl:variable name="idpub" select="@id"/>
        
    ###  http:/jcr.di.uminho.pt/2019/pubs#<xsl:value-of select="@id"/>
      :<xsl:value-of select="@id"/> rdf:type owl:NamedIndividual ,
        :<xsl:value-of select="name(.)"/> ;
          :Address "<xsl:value-of select="address"/>" ;
          :Booktitle "<xsl:value-of select="booktitle"/>" ;
          :Chapter "<xsl:value-of select="chapter"/>" ;
          :Title "<xsl:value-of select="title"/>" ;
          :Month "<xsl:value-of select="month"/>" ;
          :Doi "<xsl:value-of select="doi"/>" ; 
          :Year "<xsl:value-of select="year"/>" .
        

    <xsl:for-each select="author">
      :<xsl:value-of select="$idpub"/> :hasAuthor :<xsl:value-of select="@id"/> .
    </xsl:for-each>
        
    <xsl:for-each select="editor">
      :<xsl:value-of select="$idpub"/> :hasAuthor :<xsl:value-of select="@id"/> .
    </xsl:for-each>
        
    <xsl:for-each select="author-ref">
      :<xsl:value-of select="$idpub"/> :hasAuthor :<xsl:value-of select="@authorid"/> .
    </xsl:for-each>
        
    <xsl:for-each select="editor-ref">
      :<xsl:value-of select="$idpub"/> :hasAuthor :<xsl:value-of select="@authorid"/> .
    </xsl:for-each>

  </xsl:template>
    
  <xsl:template match="author">
    ###  http:/jcr.di.uminho.pt/2019/pubs#<xsl:value-of select="@id"/>
      :<xsl:value-of select="@id"/> rdf:type owl:NamedIndividual ,
        :Author ;
        :Name "<xsl:value-of select="."/>" .  
  </xsl:template>
    
  <xsl:template match="editor">
    ###  http:/jcr.di.uminho.pt/2019/pubs#<xsl:value-of select="@id"/>
    :<xsl:value-of select="@id"/> rdf:type owl:NamedIndividual ,
      :Editor ;
      :Name "<xsl:value-of select="."/>" .  
  </xsl:template>
    
</xsl:stylesheet>
