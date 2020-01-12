> Preconditions

Preconditions can be attached to `change logs` or `changesets` to control the execution of an update based on the state of the database.


There are several reasons to use preconditions, including:

* Document what assumptions the writers of the changelog had when creating it.
* Enforce that those assumptions are not violated by users running the changelog
* Perform data checks before performing an unrecoverable change such as drop_Table
* Control what changesets are run and not run based on the state of the database

If desired, a precondition can be the only tag in a <changeSet>.

Preconditions at the changelog level apply to all changesets, not just those listed in the current changelog or its child changelogs.

> Sample With Preconditions

```<?xml version="1.0" encoding="UTF-8"?>
 <databaseChangeLog
   xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
          http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
     <preConditions>
         <dbms type="oracle" />
         <runningAs username="SYSTEM" />
     </preConditions>
     <changeSet id="1" author="bob">
         <preConditions onFail="WARN">
             <sqlCheck expectedResult="0">select count(*) from oldtable</sqlCheck>
         </preConditions>
         <comment>Comments should go after preCondition. If they are before then liquibase usually gives error.</comment>
         <dropTable tableName="oldtable"/>
     </changeSet>
 </databaseChangeLog>
 ```

> Handling Failures and Errors

Liquibase distinguishes between precondition “failures” (check failed) and “errors” (exception thrown in execution of check) 
and the reaction to both can be controlled via the “onFail” and “onError” attributes on the <preConditions> tag. Since 1.8

> Available attributes

* `Attribute`	`Description`
* `onFail`	What to do when preconditions fail (see below).
* `onError`	What to do when preconditions error (see below).
* `onSqlOutput`	What to do in updateSQL mode (see below). Since 1.9.5
* `onFailMessage`	Custom message to output when preconditions fail. Since 2.0
* `onErrorMessage`	Custom message to output when preconditions fail. Since 2.0

>Possible onFail/onError values

* `Value` : `Description`
* `HALT`	Immediately halt the execution of the entire change log. [DEFAULT]
* `CONTINUE`	Skip over the change set. Execution of the change set will be attempted again on the next update. Continue with the change log.
* `MARK_RAN`	Skip over the change set, but mark it as executed. Continue with the change log.
* `WARN`	Output a warning and continue executing the change set/change log as normal.

Outside a changeset (e.g. at the beginning of the change log), only HALT and WARN are possible values.

>Possible onSqlOutput values

* `Value` : `Description`
* `TEST` : 	Run the changeSet in updateSQL mode.
* `FAIL` : 	Fail the preCondition in updateSQL mode.
* `IGNORE` : 	Ignore the preCondition in updateSQL mode (default).